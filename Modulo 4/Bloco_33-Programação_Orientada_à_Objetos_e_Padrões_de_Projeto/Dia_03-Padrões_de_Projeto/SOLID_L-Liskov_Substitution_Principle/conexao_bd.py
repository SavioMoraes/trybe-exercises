import analyzer


# o parâmetro database é um connector
def analyze_data(token, database, data):
    try:
        report = analyzer.complete_report(data)
        database.count_request(token)  # Cliente receberá cobrança
        return report

    # Se a database não tiver o método count_request, vai lançar o erro
    # AttributeError -- e a gente deixa o programa travar se isso acontecer.
    except analyzer.InvalidDataException:
        # A gente lida apenas com InvalidDataException, que é um erro
        # esperado quando o relatório não estiver pronto.
        return  # Cliente não receberá cobrança, pois não geramos o relatório

import json
from csv import DictWriter


class SalesReport():
    def __init__(self, export_file):
        self.export_file = export_file + '.json'

    def build(self):
        """ Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos! """
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    def serialize(self):
        with open(self.export_file, 'w') as file:
            json.dump(self.build(), file)

    def serialize_csv(self):
        with open('meu_relatorio.csv', 'w') as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)


# Para testar
relatorio_de_vendas = SalesReport('meu_relatorio')
print(relatorio_de_vendas)
relatorio_de_vendas.serialize()
print(relatorio_de_vendas)
relatorio_de_vendas.serialize_csv()
print(relatorio_de_vendas)

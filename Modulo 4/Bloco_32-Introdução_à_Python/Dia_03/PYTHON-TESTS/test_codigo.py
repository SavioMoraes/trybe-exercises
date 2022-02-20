from codigo import is_even, is_odd


def test_is_even_if_number_is_even_returns_true():
    'Para um número par a função deve retornar o valor True'
    assert is_even(2) is True


def test_is_even_if_number_is_even_returns_false():
    'Para um número ímpar a função deve retornar o valor False'
    assert is_even(3) is False


def test_is_odd_if_number_is_even_returns_true():
    'Para um número par a função deve retornar o valor False'
    assert is_odd(3) is True


def test_is_odd_if_number_is_even_returns_false():
    'Para um número ímpar a função deve retornar o valor True'
    assert is_odd(2) is False

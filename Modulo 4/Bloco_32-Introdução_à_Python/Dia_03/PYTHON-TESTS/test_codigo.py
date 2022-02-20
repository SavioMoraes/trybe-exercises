import pytest
from codigo import is_even, is_odd, divide


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

# a função abaixo, testa se é chamada uma exceção quando dividimos
# um numero por zero (o erro ZeroDivisionError)
# o 'with()', testa se a exceçõ foi lançada dentro do contexto dele...


def test_divide_when_other_denominator_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
        # divide(2, 1) ## não lança a exceção e o teste falha, pois
        # a exceção era denominador = 0 (ZeroDivisionError)

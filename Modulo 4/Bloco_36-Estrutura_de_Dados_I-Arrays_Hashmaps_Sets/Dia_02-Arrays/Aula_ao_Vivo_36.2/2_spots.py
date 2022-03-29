def max_score_sightseeing_spot(array):
    answer = 0
    previous = 0

    for j in range(1, len(array)):  # inicia com range 1, pois
        # j corresonde ao segundo valor
        i = j - 1

        previous = max(previous, array[i] + i)
        answer = max(answer, previous + array[j] - j)

    return answer


spots = [8, 1, 5, 2, 6]  # R:11
print(max_score_sightseeing_spot(spots))

spots = [4, 1, 5, 2, 6]  # R:9
print(max_score_sightseeing_spot(spots))

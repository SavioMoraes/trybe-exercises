class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        # self._buckets = [None for i in range(10)]  # gerando ambiguidade
        self._buckets = [[] for i in range(10)]  # searate chaining

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        # self._buckets[address] = employee  # gerando ambiguidade
        self._buckets[address].append(employee)  # searate chaining

    def get_value(self, id_num):
        # address = self.get_address(id_num)  # gerando ambiguidade
        # return self._buckets[address].name
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_value):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_value


if __name__ == "__main__":

    employees = [
        (14, "name1"),
        (23, "name2"),
        (10, "name3"),
        (9, "name4"),
        (24, "name1"),
    ]
    # employees = []
    registry = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    # print(registry.get_value(23))
    # print(employees)
    # print(registry.get_value(14))
    # print(employees)
    print(registry.get_value(24))  # acessou o mesmo queo 14
    print(employees)
    # registry.insert(24)
    # print(type(id_num))

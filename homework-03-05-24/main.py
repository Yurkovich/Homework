class Student:
    def __init__(self, name, age, course):
        self.name = name
        self.age = age
        self.course = course
        self.next = None

class StudentsList:
    def __init__(self):
        self.head = None

    def add_student_to_beginning(self, name, age, course):
        new_student = Student(name, age, course)
        new_student.next = self.head
        self.head = new_student

    def remove_student_by_name(self, name):
        if self.head is None:
            return

        if self.head.name == name:
            self.head = self.head.next
            return

        current = self.head
        while current.next is not None:
            if current.next.name == name:
                current.next = current.next.next
                return
            current = current.next

    def find_student_by_name(self, name):
        current = self.head
        while current is not None:
            if current.name == name:
                return current
            current = current.next
        return None

    def update_student_info(self, name, age=None, course=None):
        student = self.find_student_by_name(name)
        if student is not None:
            if age is not None:
                student.age = age
            if course is not None:
                student.course = course

    def print_students(self):
        current = self.head
        while current is not None:
            print(f"Name: {current.name}, Age: {current.age}, Course: {current.course}")
            current = current.next

students = StudentsList()
students.add_student_to_beginning("Ivan", 20, 3)
students.add_student_to_beginning("Nikita", 22, 4)
students.print_students()
students.remove_student_by_name("Nikita")
students.update_student_info("Ivan", age=23)
students.print_students()
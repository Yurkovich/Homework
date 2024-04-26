
class Solution(object):
    def isValid(self, string):
        stack = []
        opening_brackets = "([{"
        closing_brackets = ")]}"
        bracket_pairs = {")": "(", "]": "[", "}": "{"}

        for char in string:
            if char in opening_brackets:
                stack.append(char)
            elif char in closing_brackets:
                if not stack or stack.pop() != bracket_pairs[char]:
                    return False

        return not stack
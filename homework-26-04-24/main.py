
class Solution(object):
    def isValid(self, s):
        stack = []
        closetopen = {')' : '(', '}' : '{' , ']' : '['}

        for char in s:
            if char in closetopen:
                if stack and stack[-1] == closetopen[char]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)
        return True if not stack else False 
    
sol = Solution()
print(sol.isValid('()[]{}'))
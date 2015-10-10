class Node():
	def __init__(self, data = None, next = None):
		self.data = data
		self.next = next


def printList(head):
	if head == None:
		return

	while head != None:
		print head.data
		head = head.next

	return head


head = Node()
head.data = 1

second = Node()
second.data = 2
head.next = second

third = Node()
third.data = 3
second.next = third

printList(head) 

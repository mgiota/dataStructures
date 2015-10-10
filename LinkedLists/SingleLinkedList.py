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

def InsertAtTail(head, data):
	newNode = Node()
	newNode.data = data

	if head == None:
		head = newNode
	else:
		current = head
		while current.next != None:
			current = current.next
		current.next = newNode
	return head
	
#TODO: Write Unit tests asap to test my cases
"""head = Node()
head.data = 1

second = Node()
second.data = 2
head.next = second

third = Node()
third.data = 3
second.next = third"""


head = None
head = InsertAtTail(head, 1)
InsertAtTail(head, 2)
InsertAtTail(head, 3)
InsertAtTail(head, 4)
printList(head) 

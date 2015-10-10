class Node():
	def __init__(self, data = None, next = None):
		self.data = data
		self.next = next

class SingleLinkedList():

	def printList(self, head):
		if head == None:
			return

		while head != None:
			print head.data
			head = head.next

		return head

	def Count(self, head):
		if head == None:
			return 0
		count = 0
		current = head
		while current != None:
			count = count + 1
			current = current.next

		return count

	def InsertAtTail(self, head, data):
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

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

	def InsertAtHead(self, head, data):
		if head == None:
			head = self.InsertAtTail(head, data)
			return head
		newNode = Node()
		newNode.data = data
		newNode.next = head
		head = newNode
		return head

	def InsertAtPosition(self, head, data, position):
		newNode = Node()
		newNode.data = data

		if head == None:
			head = newNode
			return head
		index = 0
		current = head
		prev = None
		while index < position:
			index = index + 1
			prev = current
			current = current.next
		if prev != None:
			prev.next = newNode
		else:
			head = newNode
		newNode.next = current
		
		return head

	def Delete(self, head, position):
		if head == None:
			return
		index = 0
		current = head
		prev = None
		while index < position:
			index = index + 1
			prev = current
			current = current.next
		
		if prev == None:
			head = current.next
			current.next = None
		else:
			prev.next = current.next
		return head

	def ReversePrint(self, head):
		if head == None:
			return
		self.ReversePrint(head.next)
		print head.data		

	def Reverse(self, head, prev):
		if head == None:
			return prev
		current = head.next
		head.next = prev
		return self.Reverse(current, head)
		
			

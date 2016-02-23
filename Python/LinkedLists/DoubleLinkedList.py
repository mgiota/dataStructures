class Node(object):
	def __init__(self, data=None, next_node=None, prev_node = None):
		self.data = data
		self.next = next_node
		self.prev = prev_node

	def Reverse(self, head):
		if head == None:
			return
		current = head
		prev = None

		while current != None:
			nxt = current.next
			current.prev = nxt 
			current.next = prev
			prev = current
			current = nxt

		return prev

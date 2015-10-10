import unittest
import SingleLinkedList

class SingleLinkedListTestCase(unittest.TestCase):
	def setUp(self):
		self.list = SingleLinkedList.SingleLinkedList()
	
	def test_insertAtTail_should_add_node_to_empty_list(self):
		#arrange
		head = None
		
		#act
		head = self.list.InsertAtTail(head, 1)
		
		#assert
		assert head.data == 1 
	
	def test_insertAtTail_should_add_nodes_to_non_empty_list(self):
		head = None
		head = self.list.InsertAtTail(head, 1)
		self.list.InsertAtTail(head, 2)
		self.list.InsertAtTail(head, 3)
		self.list.InsertAtTail(head, 4)
		
		assert self.list.Count(head) == 4	

	def test_insertAtHead_should_add_node_to_empty_list(self):
		head = None

		head = self.list.InsertAtHead(head, 1)

		assert head.data == 1

	def test_insertAtHead_should_add_nodes_to_non_empty_list(self):
		head = None
		head = self.list.InsertAtHead(head, 1)
		head = self.list.InsertAtHead(head, 2)
		head = self.list.InsertAtHead(head, 3)
		head = self.list.InsertAtHead(head, 4)

		assert self.list.Count(head) == 4

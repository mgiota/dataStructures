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

	def test_insertAtPosition_add_node_to_non_empty_list(self):
		head = None
		head = self.list.InsertAtTail(head, 1)
		self.list.InsertAtTail(head, 2)
		self.list.InsertAtTail(head, 3)

		self.list.InsertAtPosition(head, 5, 2)
		
		assert head.next.next.data == 5

	def test_insertAtPosition_add_node_to_position_zero_in_non_empty_list(self):
		head = None
		head = self.list.InsertAtTail(head, 1)
		self.list.InsertAtTail(head, 2)
		self.list.InsertAtTail(head, 3)

		head = self.list.InsertAtPosition(head, 5, 0)

		assert head.data == 5
	
	def test_delete_deletes_a_node_at_specified_position_from_non_empty_list(self):
		head = None
		head = self.list.InsertAtTail(head, 1)
		self.list.InsertAtTail(head, 2)
		self.list.InsertAtTail(head, 3)
	
		head = self.list.Delete(head, 1)

		assert head.next.data == 3

	def test_delete_deletes_a_node_from_zero_position(self):
		head = None
		head = self.list.InsertAtTail(head, 1)
		self.list.InsertAtTail(head, 2)
		self.list.InsertAtTail(head, 3)

		head = self.list.Delete(head, 0)
		
		assert head.data == 2

	def test_reverse_reverses_a_non_empty_list(self):
		head = None
		head = self.list.InsertAtTail(head, 1)
		self.list.InsertAtTail(head, 2)
		self.list.InsertAtTail(head, 3)
		self.list.InsertAtTail(head, 4)

		head = self.list.Reverse(head, None)

		assert head.data == 4

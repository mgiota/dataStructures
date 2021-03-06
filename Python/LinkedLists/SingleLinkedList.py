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

  def CompareLists(self, headA, headB):
    if (headA == None and headB != None) or (headB == None and headA != None):
      return 0
    if headA == None and headB == None:
      return 1
    
    while headA != None and headB != None:
      if headA.data != headB.data:
        return 1
      headA = headA.next
      headB = headB.next
    if headA == None and headB == None:
      return 1
    else:
      return 0

  def MergeLists(self, headA, headB):
    if headA == None and headB != None:
      return headB
    if headB == None and headA != None:
      return headA
    if headA == None and headB == None:
      return
    
    result = None
    resultHead = None
    while headA != None or headB != None:
      if result == None:
        if headA.data < headB.data:
          result = headA
          resultHead = headA
          headA = headA.next
        else:
          result = headB
          resultHead = headB
          headB = headB.next
      else:
        if headA == None and headB != None:
          result.next = headB
          headB = headB.next
        elif headB == None and headA != None:
          result.next = headA
          headA = headA.next
        elif headA.data < headB.data:
          result.next = headA
          headA = headA.next
        else:
          result.next = headB
          headB = headB.next
        result = result.next
                
    return resultHead

  def GetNode(self, head, position):
        if head == None:
            return
        arr = []
        arr.append(head.data)
        i = 1
        while head != None:
            arr.append(head.data)
            head = head.next
            i = i + 1
    
        return arr[i - 1 - position]

  def RemoveDuplicates(self, head):
    if head == None:
      return
    prev = head
    current = head.next
    while current != None:
      if current.data == prev.data:
        prev.next = current.next
        current = current.next
      else:
        prev = current
        current = current.next
    return head

  def HasCycle(head):
        fast = head.next
        slow = head
        while True:
            if fast == None or fast.next == None:
                  return 0
            elif fast == slow or fast.next == slow:
                  return 1
            else:
                  slow = slow.next
                  fast = fast.next.next
  
  def FindMergeNode(headA, headB):
    currentA = headA
    currentB = headB

    while currentA != currentB:
      if currentA.next == None:
        currentA = headB
      else:
        currentA = currentA.next
      
      if currentB.next == None:
        currentB = headA
      else:
        currentB = currentB.next
    
    return currentA.data          

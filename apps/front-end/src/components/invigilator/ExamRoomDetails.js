/* this array data is for the exam room details page, later it will be replaced by API */

const examRoomsData = [
    {
      id: 1,
      roomNumber: "Room 101",
      examAccessGranted: false,
      examAttendance: [
        {
          id: 1,
          name: "John Smith",
          course: "Biology",
          seatNumber: "A1",
          status: "present"
        },
        {
          id: 2,
          name: "Jane Doe",
          course: "Chemistry",
          seatNumber: "B2",
          status: "absent"
        }
      ]
    },
    {
      id: 2,
      roomNumber: "Room 201",
      examAccessGranted: true,
      examAttendance: [
        {
          id: 1,
          name: "Bob Johnson",
          course: "Physics",
          seatNumber: "C3",
          status: "present"
        },
        {
          id: 2,
          name: "Alice Smith",
          course: "Mathematics",
          seatNumber: "D4",
          status: "absent"
        }
      ]
    },
    {
      id: 3,
      roomNumber: "Room 301",
      examAccessGranted: true,
      examAttendance: [
        {
          id: 1,
          name: "David Lee",
          course: "History",
          seatNumber: "E5",
          status: "present"
        },
        {
          id: 2,
          name: "Karen Wilson",
          course: "English",
          seatNumber: "F6",
          status: "absent"
        }
      ]
    }
  ];
  
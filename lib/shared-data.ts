export type RunStatus = "not-started" | "picking" | "completed" | "overdue" | "priority"

export interface DispatchData {
  cutOffTime?: string
  timeCompleted?: string
  completedBy?: string
}

export interface PickingData {
  startTime?: string
  priority: boolean
}

export interface Run {
  id: string
  runNumber: string
  status: RunStatus
  dispatch: DispatchData
  picking: PickingData
}

export interface Leg {
  id: string
  name: string
  runs: Run[]
}

export const RUN_NUMBERS = [
  "1",
  "1A",
  "2",
  "3",
  "3A",
  "5",
  "6",
  "6A",
  "7",
  "8",
  "9",
  "14",
  "19",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "41",
  "42",
  "45",
]

export const DISPATCH_DATA: Leg[] = [
  {
    id: "leg1",
    name: "Leg 1",
    runs: [
      {
        id: "1-1",
        runNumber: "1",
        status: "completed",
        dispatch: { timeCompleted: "07:45", completedBy: "Johan" },
        picking: { startTime: "06:30", priority: false },
      },
      {
        id: "1-1a",
        runNumber: "1A",
        status: "not-started",
        dispatch: {},
        picking: { startTime: "06:45", priority: false },
      },
      {
        id: "1-2",
        runNumber: "2",
        status: "picking",
        dispatch: { cutOffTime: "09:30" },
        picking: { startTime: "07:00", priority: false },
      },
      {
        id: "1-3",
        runNumber: "3",
        status: "picking",
        dispatch: { cutOffTime: "08:45" },
        picking: { startTime: "07:15", priority: true },
      },
      {
        id: "1-3a",
        runNumber: "3A",
        status: "not-started",
        dispatch: {},
        picking: { startTime: "07:30", priority: false },
      },
      {
        id: "1-5",
        runNumber: "5",
        status: "picking",
        dispatch: { cutOffTime: "10:00" },
        picking: { startTime: "07:45", priority: false },
      },
      {
        id: "1-6",
        runNumber: "6",
        status: "completed",
        dispatch: { timeCompleted: "07:56", completedBy: "Mike" },
        picking: { startTime: "06:50", priority: false },
      },
      {
        id: "1-6a",
        runNumber: "6A",
        status: "not-started",
        dispatch: {},
        picking: { startTime: "08:00", priority: false },
      },
      {
        id: "1-7",
        runNumber: "7",
        status: "completed",
        dispatch: { timeCompleted: "10:22", completedBy: "Anna" },
        picking: { startTime: "08:15", priority: false },
      },
      {
        id: "1-8",
        runNumber: "8",
        status: "picking",
        dispatch: { cutOffTime: "11:45" },
        picking: { startTime: "08:30", priority: false },
      },
      {
        id: "1-9",
        runNumber: "9",
        status: "completed",
        dispatch: { timeCompleted: "09:33", completedBy: "David" },
        picking: { startTime: "08:45", priority: false },
      },
      {
        id: "1-14",
        runNumber: "14",
        status: "picking",
        dispatch: { cutOffTime: "09:15" },
        picking: { startTime: "09:00", priority: true },
      },
      {
        id: "1-19",
        runNumber: "19",
        status: "picking",
        dispatch: { cutOffTime: "12:00" },
        picking: { startTime: "09:15", priority: false },
      },
      {
        id: "1-21",
        runNumber: "21",
        status: "completed",
        dispatch: { timeCompleted: "10:45", completedBy: "Lisa" },
        picking: { startTime: "09:30", priority: false },
      },
      {
        id: "1-22",
        runNumber: "22",
        status: "picking",
        dispatch: { cutOffTime: "12:30" },
        picking: { startTime: "09:45", priority: false },
      },
      {
        id: "1-23",
        runNumber: "23",
        status: "completed",
        dispatch: { timeCompleted: "11:12", completedBy: "Tom" },
        picking: { startTime: "10:00", priority: false },
      },
      {
        id: "1-24",
        runNumber: "24",
        status: "picking",
        dispatch: { cutOffTime: "13:00" },
        picking: { startTime: "10:15", priority: false },
      },
      {
        id: "1-25",
        runNumber: "25",
        status: "picking",
        dispatch: { cutOffTime: "12:45" },
        picking: { startTime: "10:30", priority: false },
      },
      {
        id: "1-26",
        runNumber: "26",
        status: "picking",
        dispatch: { cutOffTime: "14:00" },
        picking: { startTime: "10:45", priority: false },
      },
      {
        id: "1-27",
        runNumber: "27",
        status: "completed",
        dispatch: { timeCompleted: "13:30", completedBy: "Sarah" },
        picking: { startTime: "11:00", priority: false },
      },
      {
        id: "1-41",
        runNumber: "41",
        status: "picking",
        dispatch: { cutOffTime: "15:00" },
        picking: { startTime: "11:15", priority: false },
      },
      {
        id: "1-42",
        runNumber: "42",
        status: "completed",
        dispatch: { timeCompleted: "14:45", completedBy: "Mark" },
        picking: { startTime: "11:30", priority: false },
      },
      {
        id: "1-45",
        runNumber: "45",
        status: "picking",
        dispatch: { cutOffTime: "14:30" },
        picking: { startTime: "11:45", priority: true },
      },
    ],
  },
  {
    id: "leg2",
    name: "Leg 2",
    runs: [
      {
        id: "2-1",
        runNumber: "1",
        status: "completed",
        dispatch: { timeCompleted: "10:03", completedBy: "Johan" },
        picking: { startTime: "06:30", priority: false },
      },
      {
        id: "2-1a",
        runNumber: "1A",
        status: "completed",
        dispatch: { timeCompleted: "10:17", completedBy: "Johan" },
        picking: { startTime: "06:45", priority: false },
      },
      {
        id: "2-2",
        runNumber: "2",
        status: "completed",
        dispatch: { timeCompleted: "09:55", completedBy: "Johan" },
        picking: { startTime: "07:00", priority: false },
      },
      {
        id: "2-3",
        runNumber: "3",
        status: "picking",
        dispatch: { cutOffTime: "11:15" },
        picking: { startTime: "07:15", priority: true },
      },
      {
        id: "2-3a",
        runNumber: "3A",
        status: "completed",
        dispatch: { timeCompleted: "10:34", completedBy: "Johan" },
        picking: { startTime: "07:30", priority: false },
      },
      {
        id: "2-5",
        runNumber: "5",
        status: "picking",
        dispatch: { cutOffTime: "11:30" },
        picking: { startTime: "07:45", priority: false },
      },
      {
        id: "2-6",
        runNumber: "6",
        status: "picking",
        dispatch: { cutOffTime: "10:45" },
        picking: { startTime: "08:00", priority: false },
      },
      {
        id: "2-6a",
        runNumber: "6A",
        status: "completed",
        dispatch: { timeCompleted: "11:22", completedBy: "Maria" },
        picking: { startTime: "08:15", priority: false },
      },
      {
        id: "2-7",
        runNumber: "7",
        status: "picking",
        dispatch: { cutOffTime: "12:45" },
        picking: { startTime: "08:30", priority: false },
      },
      {
        id: "2-8",
        runNumber: "8",
        status: "picking",
        dispatch: { cutOffTime: "11:00" },
        picking: { startTime: "08:45", priority: false },
      },
      {
        id: "2-9",
        runNumber: "9",
        status: "completed",
        dispatch: { timeCompleted: "12:15", completedBy: "Chris" },
        picking: { startTime: "09:00", priority: false },
      },
      {
        id: "2-14",
        runNumber: "14",
        status: "picking",
        dispatch: { cutOffTime: "13:15" },
        picking: { startTime: "09:15", priority: true },
      },
      {
        id: "2-19",
        runNumber: "19",
        status: "completed",
        dispatch: { timeCompleted: "11:45", completedBy: "Nina" },
        picking: { startTime: "09:30", priority: false },
      },
      {
        id: "2-21",
        runNumber: "21",
        status: "picking",
        dispatch: { cutOffTime: "12:00" },
        picking: { startTime: "09:45", priority: false },
      },
      {
        id: "2-22",
        runNumber: "22",
        status: "picking",
        dispatch: { cutOffTime: "13:45" },
        picking: { startTime: "10:00", priority: false },
      },
      {
        id: "2-23",
        runNumber: "23",
        status: "completed",
        dispatch: { timeCompleted: "12:30", completedBy: "Emily" },
        picking: { startTime: "10:15", priority: false },
      },
      {
        id: "2-24",
        runNumber: "24",
        status: "picking",
        dispatch: { cutOffTime: "14:00" },
        picking: { startTime: "10:30", priority: false },
      },
      {
        id: "2-25",
        runNumber: "25",
        status: "completed",
        dispatch: { timeCompleted: "13:15", completedBy: "Alex" },
        picking: { startTime: "10:45", priority: false },
      },
      {
        id: "2-26",
        runNumber: "26",
        status: "picking",
        dispatch: { cutOffTime: "13:30" },
        picking: { startTime: "11:00", priority: false },
      },
      {
        id: "2-27",
        runNumber: "27",
        status: "picking",
        dispatch: { cutOffTime: "15:00" },
        picking: { startTime: "11:15", priority: false },
      },
      {
        id: "2-41",
        runNumber: "41",
        status: "completed",
        dispatch: { timeCompleted: "14:30", completedBy: "Kate" },
        picking: { startTime: "11:30", priority: false },
      },
      {
        id: "2-42",
        runNumber: "42",
        status: "picking",
        dispatch: { cutOffTime: "15:30" },
        picking: { startTime: "11:45", priority: false },
      },
      {
        id: "2-45",
        runNumber: "45",
        status: "picking",
        dispatch: { cutOffTime: "14:45" },
        picking: { startTime: "12:00", priority: true },
      },
    ],
  },
  {
    id: "leg3",
    name: "Leg 3",
    runs: [
      {
        id: "3-1",
        runNumber: "1",
        status: "completed",
        dispatch: { timeCompleted: "12:15", completedBy: "Johan" },
        picking: { startTime: "06:30", priority: false },
      },
      {
        id: "3-1a",
        runNumber: "1A",
        status: "completed",
        dispatch: { timeCompleted: "11:45", completedBy: "Johan" },
        picking: { startTime: "06:45", priority: false },
      },
      {
        id: "3-2",
        runNumber: "2",
        status: "picking",
        dispatch: { cutOffTime: "13:00" },
        picking: { startTime: "07:00", priority: false },
      },
      {
        id: "3-3",
        runNumber: "3",
        status: "completed",
        dispatch: { timeCompleted: "12:30", completedBy: "Emily" },
        picking: { startTime: "07:15", priority: false },
      },
      {
        id: "3-3a",
        runNumber: "3A",
        status: "picking",
        dispatch: { cutOffTime: "12:00" },
        picking: { startTime: "07:30", priority: false },
      },
      {
        id: "3-5",
        runNumber: "5",
        status: "picking",
        dispatch: { cutOffTime: "13:30" },
        picking: { startTime: "07:45", priority: false },
      },
      {
        id: "3-6",
        runNumber: "6",
        status: "completed",
        dispatch: { timeCompleted: "13:22", completedBy: "Paul" },
        picking: { startTime: "08:00", priority: false },
      },
      {
        id: "3-6a",
        runNumber: "6A",
        status: "picking",
        dispatch: { cutOffTime: "13:15" },
        picking: { startTime: "08:15", priority: false },
      },
      {
        id: "3-7",
        runNumber: "7",
        status: "picking",
        dispatch: { cutOffTime: "14:00" },
        picking: { startTime: "08:30", priority: false },
      },
      {
        id: "3-8",
        runNumber: "8",
        status: "completed",
        dispatch: { timeCompleted: "13:45", completedBy: "Kate" },
        picking: { startTime: "08:45", priority: false },
      },
      {
        id: "3-9",
        runNumber: "9",
        status: "picking",
        dispatch: { cutOffTime: "14:30" },
        picking: { startTime: "09:00", priority: false },
      },
      {
        id: "3-14",
        runNumber: "14",
        status: "picking",
        dispatch: { cutOffTime: "13:45" },
        picking: { startTime: "09:15", priority: true },
      },
      {
        id: "3-19",
        runNumber: "19",
        status: "completed",
        dispatch: { timeCompleted: "14:12", completedBy: "Alex" },
        picking: { startTime: "09:30", priority: false },
      },
      {
        id: "3-21",
        runNumber: "21",
        status: "picking",
        dispatch: { cutOffTime: "15:00" },
        picking: { startTime: "09:45", priority: false },
      },
      {
        id: "3-22",
        runNumber: "22",
        status: "completed",
        dispatch: { timeCompleted: "14:33", completedBy: "Sam" },
        picking: { startTime: "10:00", priority: false },
      },
      {
        id: "3-23",
        runNumber: "23",
        status: "picking",
        dispatch: { cutOffTime: "15:30" },
        picking: { startTime: "10:15", priority: false },
      },
      {
        id: "3-24",
        runNumber: "24",
        status: "completed",
        dispatch: { timeCompleted: "15:12", completedBy: "Rachel" },
        picking: { startTime: "10:30", priority: false },
      },
      {
        id: "3-25",
        runNumber: "25",
        status: "picking",
        dispatch: { cutOffTime: "14:45" },
        picking: { startTime: "10:45", priority: false },
      },
      {
        id: "3-26",
        runNumber: "26",
        status: "picking",
        dispatch: { cutOffTime: "16:00" },
        picking: { startTime: "11:00", priority: false },
      },
      {
        id: "3-27",
        runNumber: "27",
        status: "completed",
        dispatch: { timeCompleted: "15:45", completedBy: "Ben" },
        picking: { startTime: "11:15", priority: false },
      },
      {
        id: "3-41",
        runNumber: "41",
        status: "picking",
        dispatch: { cutOffTime: "16:30" },
        picking: { startTime: "11:30", priority: false },
      },
      {
        id: "3-42",
        runNumber: "42",
        status: "completed",
        dispatch: { timeCompleted: "16:15", completedBy: "Grace" },
        picking: { startTime: "11:45", priority: false },
      },
      {
        id: "3-45",
        runNumber: "45",
        status: "picking",
        dispatch: { cutOffTime: "15:30" },
        picking: { startTime: "12:00", priority: true },
      },
    ],
  },
]

export function getCurrentTime(): string {
  return new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  })
}

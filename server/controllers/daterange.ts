import { DateRange } from "../models"

export const create_daterange = async (req: any, res: any) => {
  try {
    const dateRange = new DateRange(req.body)
    const newDateRange = await dateRange.save()

    res.status(201).json({ dateRange: newDateRange })
  } catch (error) {
    res.status(400).json(`Creating DateRange error: ${error.message}`)
  }
}

export const delete_daterange = async (req: any, res: any) => {
  try {
    const { dateId } = req.params

    await DateRange.findByIdAndDelete(dateId)

    res.status(201).json({ message: "Date range deleted successfully" })
  } catch (error) {
    res.status(400).json(`Deleting DateRange error: ${error.message}`)
  }
}

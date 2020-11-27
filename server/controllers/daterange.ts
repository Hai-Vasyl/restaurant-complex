import { DateRange } from "../models"
import { Order } from "../models"
import { User } from "../models"

export const get_dateranges = async (req: any, res: any) => {
  try {
    const { hrComplex } = req.body

    const dateRanges = await DateRange.find({ hrComplex })
    res.json(dateRanges)
  } catch (error) {
    res.status(400).json(`Getting DateRanges error: ${error.message}`)
  }
}

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

    res.json({ message: "Date range deleted successfully" })
  } catch (error) {
    res.status(400).json(`Deleting DateRange error: ${error.message}`)
  }
}

export const book_dateranges = async (req: any, res: any) => {
  try {
    const {
      dates,
      hrComplex,
      user: { firstname, lastname, phone },
    } = req.body
    const { userId } = req
    const dateRanges: any = await DateRange.find({ hrComplex })

    await User.updateOne({ _id: userId }, { firstname, lastname, phone })

    let isBooked = false
    for (let i = 0; i < dateRanges.length; i++) {
      for (let j = 0; j < dates.length; j++) {
        if (dateRanges[i]._id === dates[j]._id && dateRanges[i].booked) {
          isBooked = true
          dates[j].booked = true
        }
      }
    }
    if (isBooked) {
      return res.json({
        dates,
        message: "Один або більше діапазонів дат вже заброньовані!",
      })
    }

    for (let i = 0; i < dates.length; i++) {
      await DateRange.findByIdAndUpdate(dates[i]._id, { booked: true })
      const order = new Order({
        buyer: userId,
        hrComplex,
        price: dates[i].price,
        settlement: dates[i].settlement,
        eviction: dates[i].eviction,
        date: new Date(),
      })
      await order.save()
    }

    res.json({ message: "Date range updated successfully" })
  } catch (error) {
    res.status(400).json(`Booking DateRange error: ${error.message}`)
  }
}

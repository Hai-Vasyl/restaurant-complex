import { Response } from "../models"

export const create_response = async (req: any, res: any) => {
  try {
    const { userId } = req
    const { hrComplex, content, response: responseId } = req.body

    const response = new Response({
      hrComplex,
      owner: userId,
      content,
      date: new Date(),
      response: responseId,
    })
    const newResponse = await response.save()

    res.status(201).json(newResponse)
  } catch (error) {
    res.status(400).json(`Creating response error: ${error.message}`)
  }
}

export const get_responses = async (req: any, res: any) => {
  try {
    const { hrComplex } = req.body
    const responses = await Response.find({
      hrComplex,
      response: null,
    })
      .populate({ path: "owner", select: "username ava role" })
      .sort({ date: -1 })

    let responsesCopy: any = [...responses]
    for (let i = 0; i < responsesCopy.length; i++) {
      const answers = await Response.find({
        response: responsesCopy[i]._id,
      })
        .populate({ path: "owner", select: "username ava role" })
        .sort({ date: -1 })

      responsesCopy[i] = { ...responsesCopy[i]._doc, answers }
    }

    res.json(responsesCopy)
  } catch (error) {
    res.status(400).json(`Getting responses error: ${error.message}`)
  }
}

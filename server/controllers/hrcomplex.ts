import { HRcomplex } from "../models"

export const create_hrcomplex = async (req: any, res: any) => {
  try {
    const hrcomplex = new HRcomplex(req.body)
    const newHrcomplex = await hrcomplex.save()

    res.status(201).json(newHrcomplex._id)
  } catch (error) {
    res.status(400).json(`Creating HRcomplex error: ${error.message}`)
  }
}

export const get_hrcomplex = async (req: any, res: any) => {
  try {
    const hrcomplex = await HRcomplex.findById(req.body.hrComplex)

    res.status(200).json(hrcomplex)
  } catch (error) {
    res.status(400).json(`Getting HRcomplex error: ${error.message}`)
  }
}

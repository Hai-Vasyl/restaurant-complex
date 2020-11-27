import React, { useState } from "react"
import moment from "moment"
import { DatePicker, Space } from "antd"
import "../styles/createdaterange.scss"

const FieldDateRange: React.FC<{
  onChangePicker(value: any, formatString: [string, string]): void | undefined
}> = ({ onChangePicker }) => {
  const { RangePicker } = DatePicker

  const range = (start: number, end: number) => {
    const result = []
    for (let i = start; i < end; i++) {
      result.push(i)
    }
    return result
  }

  const disabledDate = (current: any) => {
    return current && current < moment().endOf("day")
  }

  const disabledRangeTime = (_: any, type: string) => {
    if (type === "start") {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      }
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    }
  }

  return (
    <>
      {/* <Space className='date-picker' direction='vertical' size={12}>
      <RangePicker
        disabledDate={disabledDate}
        disabledTime={disabledRangeTime}
        onChange={onChangePicker}
        onOk={() => {}}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [
            moment("00:00:00", "HH:mm:ss"),
            moment("11:59:59", "HH:mm:ss"),
          ],
        }}
        format='YYYY-MM-DD HH:mm:ss'
      />
    </Space> */}
    </>
  )
}

export default FieldDateRange

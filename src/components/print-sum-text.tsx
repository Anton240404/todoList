import React from "react"

type Obj = {
  data: string
  count: number
}

export function Button(obj: Obj) {
  return (
    <div>
      <button>
        {obj.count} {obj.data}
      </button>
    </div>
  )
}

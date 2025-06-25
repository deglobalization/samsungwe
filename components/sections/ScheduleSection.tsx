import { Button } from "@/components/ui/button"

const scheduleData = [
  { day: "월", label: "일반진료", color: "bg-yellow-500 hover:bg-yellow-600" },
  { day: "화", label: "일반진료", color: "bg-yellow-500 hover:bg-yellow-600" },
  { day: "수", label: "일반진료", color: "bg-yellow-500 hover:bg-yellow-600" },
  { day: "목", label: "일반진료", color: "bg-yellow-500 hover:bg-yellow-600" },
  { day: "금", label: "일반진료", color: "bg-yellow-500 hover:bg-yellow-600" },
  { day: "토", label: "주말진료", color: "bg-yellow-300 hover:bg-yellow-400 text-gray-800" },
  { day: "일", label: "휴진", color: "bg-red-600 hover:bg-red-700" }
]

export default function ScheduleSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">주간 진료 일정</h2>
          <p className="text-gray-600">요일별 진료 상황을 확인하세요</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
          {scheduleData.map((item, index) => (
            <div key={index} className="text-center">
              <Button 
                className={`w-full h-20 ${item.color} text-white font-semibold text-lg mb-2 transition-all duration-300 hover:scale-105 shadow-md`}
              >
                {item.label}
              </Button>
              <p className="text-gray-700 font-medium text-lg">{item.day}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            진료 예약은 전화 또는 온라인으로 가능합니다. <strong>043-XXX-XXXX</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

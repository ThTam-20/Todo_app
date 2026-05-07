const Footer = ({completedTasksCount = 0, activeTasksCount = 0}) => {
  return <>
  {completedTasksCount + activeTasksCount > 0 && (
    <div className="text-center">
      <p className="text-sm text-muted-foreground">
        {
          completedTasksCount > 0 && (
            <>
            Đã hoàn thành 🐤🐥 {completedTasksCount}  nhiệm vụ
            {
              activeTasksCount > 0 && `, còn ${activeTasksCount} nhiệm vụ đang làm. 🐣`
            }
            </>
          )
        }
        {completedTasksCount === 0 && activeTasksCount > 0 && (
          <>
          Bắt đầu làm {activeTasksCount} nhiệm vụ ngay 😡.
          </>
        )}

      </p>

    </div>
  )}
  </>
}

export default Footer
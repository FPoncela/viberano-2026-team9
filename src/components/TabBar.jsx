function TabBar({ tabs, activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-surface border-t border-border flex">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 min-h-12 py-sm flex flex-col items-center gap-xs text-caption ${
              isActive ? 'text-primary' : 'text-text-secondary'
            }`}
          >
            <span aria-hidden="true">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default TabBar

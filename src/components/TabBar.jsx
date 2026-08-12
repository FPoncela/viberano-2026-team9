function TabBar({ tabs, activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-surface border-t border-border flex">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab
        const Icono = tab.icon
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 min-h-12 py-sm flex flex-col items-center gap-xs text-caption ${
              isActive ? 'text-primary font-semibold' : 'text-text-secondary'
            }`}
          >
            <Icono aria-hidden="true" className="w-[21px] h-[21px]" />
            <span>{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default TabBar

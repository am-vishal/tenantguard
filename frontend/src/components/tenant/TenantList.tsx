import { Tenant } from '../../types';
import { FC, useState, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight, FaSearch, FaSlidersH } from 'react-icons/fa';


interface TenantListProps {
    tenants: Tenant[];
    selectedId: number | null;
    onSelect: (id: number) => void;
}

const TenantList: FC<TenantListProps> = ({ tenants, selectedId, onSelect }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortAsc, setSortAsc] = useState(true);
    const [propertyFilter, setPropertyFilter] = useState('All');

    // Unique properties for filter dropdown
    const properties = useMemo(() => {
        const all = tenants.map(t => t.property);
        return ['All', ...Array.from(new Set(all))];
    }, [tenants]);

    // Filtered + sorted tenants
    const filteredTenants = useMemo(() => {
        let result = [...tenants];

        if (searchTerm) {
            result = result.filter(t =>
                t.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (propertyFilter !== 'All') {
            result = result.filter(t => t.property === propertyFilter);
        }

        result.sort((a, b) =>
            sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );

        return result;
    }, [tenants, searchTerm, sortAsc, propertyFilter]);

    return (
        <aside
            className={`transition-all duration-300 ${collapsed ? 'w-16' : 'w-full lg:w-1/3'
                } bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden relative`}
        >
            {/* Collapse/Expand Button */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute top-4 right-4 text-gray-500 hover:text-blue-500"
                title={collapsed ? 'Expand' : 'Collapse'}
            >
                {collapsed ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
            </button>

            {/* Header */}
            <div className="flex items-center justify-between bg-blue-500 text-white px-6 py-4">
                <h2 className="text-xl font-semibold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
                    {collapsed ? 'T' : 'Tenants'}
                </h2>
                {!collapsed && (
                    <FaSlidersH size={18} className="text-white" />
                )}
            </div>

            {!collapsed && (
                <div className="p-4 border-b border-gray-200 space-y-3">
                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <FaSearch size={16} className="absolute top-2.5 left-3 text-gray-400" />
                    </div>

                    {/* Filter by Property */}
                    <select
                        value={propertyFilter}
                        onChange={e => setPropertyFilter(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        {properties.map(prop => (
                            <option key={prop} value={prop}>
                                {prop}
                            </option>
                        ))}
                    </select>

                    {/* Sort Toggle */}
                    <button
                        onClick={() => setSortAsc(prev => !prev)}
                        className="w-full text-sm text-gray-600 hover:text-blue-600 underline transition-colors"
                    >
                        Sort: {sortAsc ? 'A–Z' : 'Z–A'}
                    </button>
                </div>
            )}

            {/* Tenant List */}
            {!collapsed && (
                <ul className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                    {filteredTenants.map(t => (
                        <li
                            key={t.id}
                            onClick={() => onSelect(t.id)}
                            className={`cursor-pointer px-6 py-4 flex justify-between items-center transition-colors duration-200 ${selectedId === t.id
                                ? 'bg-blue-100 font-semibold text-blue-700'
                                : 'hover:bg-blue-50'
                                }`}
                        >
                            <span className="truncate">{t.name}</span>
                            <span className="text-sm text-gray-400 italic truncate">{t.property}</span>
                        </li>
                    ))}

                    {filteredTenants.length === 0 && (
                        <li className="px-6 py-4 text-gray-400 italic">No tenants found</li>
                    )}
                </ul>
            )}
        </aside>
    );
};

export default TenantList;

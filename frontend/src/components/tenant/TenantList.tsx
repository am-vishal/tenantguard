import { Tenant } from '../../types';
import { FC, useState, useMemo, useRef, useEffect, MouseEvent } from 'react';
import { FaSearch, FaTimes, FaFilter, FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { FaFilterCircleXmark } from "react-icons/fa6";
import TenantDetails from './TenantDetails';
import { formatTenantName } from '../../utils/common';

interface TenantListProps {
    tenants: Tenant[];
    selectedId: number | null;
    onSelect: (id: number) => void;
    deviceType: 'mobile' | 'tablet' | 'desktop';
}

const TenantList: FC<TenantListProps> = ({ tenants, selectedId, onSelect, deviceType }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortAsc, setSortAsc] = useState(true);
    const [showFilter, setShowFilter] = useState(false);
    const [propertyFilter, setPropertyFilter] = useState('All');
    const [showOverlay, setShowOverlay] = useState(false);
    const [listWidth, setListWidth] = useState(30);
    const resizing = useRef(false);

    const handleMouseDown = () => {
        resizing.current = true;
        document.body.style.cursor = 'col-resize';
    };

    const handleMouseUp = () => {
        resizing.current = false;
        document.body.style.cursor = 'default';
    };

    const handleMouseMove = (e: MouseEvent | globalThis.MouseEvent) => {
        if (!resizing.current) return;
        const screenWidth = window.innerWidth;
        const newWidth = (e.clientX / screenWidth) * 100;
        if (newWidth > 20 && newWidth < 80) {
            setListWidth(newWidth);
        }
    };

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setIsFocused(true);
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const properties = useMemo(() => {
        const all = tenants.map(t => t.stays?.[0]?.property?.name || '');
        return ['All', ...Array.from(new Set(all.filter(Boolean)))];
    }, [tenants]);

    const filteredTenants = useMemo(() => {
        let result = [...tenants];
        if (searchTerm) {
            result = result.filter(t =>
                formatTenantName(t.firstName, t.lastName, t.gender).toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (propertyFilter !== 'All') {
            result = result.filter(t => t.stays?.[0]?.property?.name === propertyFilter);
        }
        result.sort((a, b) => {
            const nameA = formatTenantName(a.firstName, a.lastName, a.gender);
            const nameB = formatTenantName(b.firstName, b.lastName, b.gender);
            return sortAsc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
        return result;
    }, [tenants, searchTerm, sortAsc, propertyFilter]);

    const ListContent = () => (
        <div className="bg-white w-full h-full overflow-y-auto border-r border-gray-200">
            <div className="flex items-center justify-between bg-blue-500 text-white px-4 py-3">
                <h2 className="text-xl font-semibold tracking-wide">Tenants</h2>
            </div>
            <div className="px-1 py-3 border-b border-gray-200">
                <div className="flex gap-2 items-center">
                    <div className="bg-blue-500 text-white text-sm rounded-sm px-2 py-1.5">
                        <button onClick={() => setSortAsc(prev => !prev)}>
                            {sortAsc ? <FaSortAlphaDown fontSize={24} /> : <FaSortAlphaDownAlt fontSize={24} />}
                        </button>
                    </div>
                    <div className="relative flex-grow min-w-0">
                        <input
                            id="searchInput"
                            name="search"
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            autoFocus={isFocused}
                            className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md transition-all duration-150"
                        />
                        <FaSearch size={14} className="absolute top-3 left-3 text-gray-400" />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute top-3 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                <FaTimes size={14} />
                            </button>
                        )}
                    </div>
                    <div className="bg-blue-500 rounded-sm text-white px-2 py-2">
                        <button onClick={() => setShowFilter(!showFilter)}>
                            {propertyFilter !== 'All' ? <FaFilterCircleXmark size={20} className="text-yellow-300" /> : <FaFilter size={18} />}
                        </button>
                    </div>
                </div>
                {showFilter && (
                    <div className="mt-3">
                        <select
                            value={propertyFilter}
                            onChange={e => setPropertyFilter(e.target.value)}
                            className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none"
                        >
                            {properties.map(prop => (
                                <option key={prop} value={prop}>{prop}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
            <ul className="divide-y divide-gray-100 max-h-[calc(100vh-120px)] overflow-y-auto">
                {filteredTenants.map(t => {
                    const name = formatTenantName(t.firstName, t.lastName, t.gender);
                    const property = t.stays?.[0]?.property?.name || 'N/A';
                    return (
                        <li
                            key={t.id}
                            onClick={() => {
                                onSelect(t.id);
                                setShowOverlay(true);
                            }}
                            className={`cursor-pointer px-4 py-3 flex justify-between items-center transition-colors duration-200 ${selectedId === t.id ? 'bg-blue-100 font-semibold text-blue-700' : 'hover:bg-blue-50'}`}
                        >
                            <span className="truncate">{name}</span>
                            <span className="text-sm text-gray-400 italic truncate">{property}</span>
                        </li>
                    );
                })}
                {filteredTenants.length === 0 && (
                    <div className="flex-1 flex flex-col items-center justify-center pt-6 text-gray-500 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-inner px-6">
                        <h2 className="text-xl font-bold mb-2">No Tenant Found</h2>
                        <p className="text-center text-sm text-gray-400">Please enter a valid search term.</p>
                    </div>
                )}
            </ul>
        </div>
    );

    return (
        <>
            {(deviceType === 'mobile' || deviceType === 'tablet') ? (
                <div className="lg:hidden w-full h-full inset-x-0 bottom-0 z-40 bg-black bg-opacity-50 flex justify-start">
                    <div className="w-full h-full pb-8 bg-white shadow-lg relative">
                        {!showOverlay ? (
                            <ListContent />
                        ) : (
                            <TenantDetails
                                deviceIsMobile={true}
                                setShowOverlay={setShowOverlay}
                                tenant={filteredTenants.length === 0 ? null : tenants.find((t) => t.id === selectedId) ?? null}
                            />
                        )}
                    </div>
                </div>
            ) : (
                <div className="hidden lg:flex w-full h-[calc(100vh-50px)] overflow-auto bg-gradient-to-tr from-white via-blue-50 to-white p-4 select-none">
                    <div
                        className="h-full overflow-auto rounded-l-md border border-gray-200 shadow-md"
                        style={{ width: `${listWidth}%` }}
                    >
                        <ListContent />
                    </div>
                    <div
                        className="w-2 bg-gray-200 hover:bg-blue-400 cursor-col-resize transition-all duration-150"
                        onMouseDown={handleMouseDown}
                    />
                    <div
                        className="h-full overflow-auto flex-grow ml rounded-r-md border border-gray-200 shadow-md"
                        style={{ width: `${100 - listWidth}%` }}
                    >
                        <TenantDetails
                            deviceIsMobile={false}
                            setShowOverlay={setShowOverlay}
                            tenant={filteredTenants.length === 0 ? null : tenants.find((t) => t.id === selectedId) ?? null}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default TenantList;
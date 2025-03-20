"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Base from "../base";
const { RowBuilder, Colgroup, Thead, Table, RowEmpty } = Base;
export default function ({ className, cols, list, empty, onClick }) {
    return (_jsxs(Table, { className: className, children: [_jsx(Colgroup, { cols: cols }), _jsx(Thead, { cols: cols }), _jsxs("tbody", { children: [list.map((row, key) => (_jsx("tr", { onClick: (e) => onClick(e, row), children: _jsx(RowBuilder, { cols: cols, value: row }) }, key))), list.length === 0 && _jsx(RowEmpty, { cols: cols, children: empty })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUdiLE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQVUzQixNQUFNLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxHQUFHLElBQUksQ0FBQztBQUU1RCxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBVztJQUM1RSxPQUFPLENBQ04sTUFBQyxLQUFLLElBQUMsU0FBUyxFQUFFLFNBQVMsYUFDMUIsS0FBQyxRQUFRLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxFQUN4QixLQUFDLEtBQUssSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJLEVBQ3JCLDRCQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUN2QixhQUVDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsWUFDL0IsS0FBQyxVQUFVLElBQ1YsSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUUsR0FBRyxHQUNULElBTEcsR0FBRyxDQU1KLENBQ0wsQ0FBQyxFQUNELElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUMsUUFBUSxJQUFDLElBQUksRUFBRSxJQUFJLFlBQUcsS0FBSyxHQUFZLElBQ3ZELElBQ0QsQ0FDUixDQUFDO0FBQ0gsQ0FBQyJ9
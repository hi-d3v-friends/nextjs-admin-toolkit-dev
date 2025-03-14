import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TableBase from "../../table/base";
import { fnCss } from "nextjs-tools";
export default function ({ items, className, list, emptyMessage }) {
    return (_jsxs("div", { className: className, children: [_jsx(TableBase.Header, { items }), list.map((row, key) => (_jsx("div", { className: fnCss.concat(`flex`, "table-top-border table-content hover"), children: _jsx(TableBase.Row, { row, items }) }, key))), list.length === 0 && _jsx(TableBase.Empty, { children: emptyMessage }), _jsx(TableBase.Closer, {})] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90YWJsZS9saXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7QUFFekMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVVuQyxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFxQjtJQUNyRixPQUFPLENBQ04sZUFBSyxTQUFTLEVBQUUsU0FBUyxhQUN4QixLQUFDLFNBQVMsQ0FBQyxNQUFNLElBQU0sS0FBSyxHQUFLLEVBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUN2QixjQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxzQ0FBc0MsQ0FBQyxZQUV0RSxLQUFDLFNBQVMsQ0FBQyxHQUFHLElBQU0sR0FBRyxFQUFFLEtBQUssR0FBSyxJQUQvQixHQUFHLENBRUgsQ0FDTixDQUFDLEVBQ0QsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBQyxTQUFTLENBQUMsS0FBSyxjQUFFLFlBQVksR0FBbUIsRUFDdkUsS0FBQyxTQUFTLENBQUMsTUFBTSxLQUFHLElBQ2YsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9
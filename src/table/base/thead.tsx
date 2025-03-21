import React from "react";
import {TableCol} from "../..";

interface Props<T> {
	cols: TableCol<T>[];
}

export default function <T>({cols}: Props<T>) {
	return (
		<thead>
			<tr className="border-top">
				{cols.map((v, key) => (
					<th
						key={key}
						className={v.className}>
						{v.name}
					</th>
				))}
			</tr>
		</thead>
	);
}

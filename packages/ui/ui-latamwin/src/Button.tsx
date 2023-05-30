'use client';

import * as React from 'react';

export const button = ({ className }: { className: string }) => {
	return (
		<button className={className} onClick={() => alert('boop')}>
			Boop
		</button>
	);
};

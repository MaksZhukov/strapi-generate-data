import React from 'react';
import { Box, Grid, Flex, Checkbox, NumberInput } from '@strapi/design-system';
import { GeneralProps } from '../types';
import { Typography } from '@strapi/design-system';

interface Props extends GeneralProps {
	values: { min: number; max: number };
	onChangeValue: (key: string, field: string) => void;
}

const IntegerInputs = ({
	onChangeCheck,
	attribute,
	attributeKey,
	checked,
	disabled,
	values,
	onChangeValue
}: Props) => {
	return (
		<Grid.Item col={12}>
			<Box marginBottom="8px">
				<Box marginBottom="12px">
					<Checkbox
						disabled={disabled}
						onCheckedChange={() => onChangeCheck(attributeKey)}
						checked={checked}
					>
						{`${attributeKey} (Field type: Integer)`}
					</Checkbox>
				</Box>
				<Flex gap="16px">
					<Box flex="1">
						<Typography>max {attribute.min ? attribute.min : ''}</Typography>
						<NumberInput
							name=""
							disabled={!checked}
							onValueChange={onChangeValue(attributeKey, 'min')}
							value={values.min}
						></NumberInput>
					</Box>
					<Box flex="1">
						<Typography>max {attribute.max ? attribute.max : ''}</Typography>
						<NumberInput
							name=""
							disabled={!checked}
							onValueChange={onChangeValue(attributeKey, 'max')}
							value={values.max}
						></NumberInput>
					</Box>
				</Flex>
			</Box>
		</Grid.Item>
	);
};

export default IntegerInputs;

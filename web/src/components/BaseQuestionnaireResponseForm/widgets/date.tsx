import { Form, DatePicker } from 'antd';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import moment, { Moment } from 'moment';
import { useCallback, useMemo } from 'react';
import { QuestionItemProps, useQuestionnaireResponseFormContext } from 'sdc-qrf';

import { formatFHIRDate, formatFHIRDateTime } from 'aidbox-react/lib/utils/date';

export function QuestionDateTime({ parentPath, questionItem }: QuestionItemProps) {
    const qrfContext = useQuestionnaireResponseFormContext();
    const { linkId, text, type, hidden } = questionItem;
    const fieldName = [...parentPath, linkId, 0, 'value', type];
    return (
        <Form.Item label={text} name={fieldName} hidden={hidden || qrfContext.readOnly}>
            <DateTimePickerWrapper type={type} />
        </Form.Item>
    );
}

type DateTimePickerWrapperProps = PickerProps<moment.Moment> & { type: string };

function DateTimePickerWrapper({ value, onChange, type }: DateTimePickerWrapperProps) {
    const newValue = useMemo(() => (value ? moment(value) : value), [value]);
    const format = type === 'date' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm';
    const showTime = type === 'date' ? false : true;
    const formatFunction = type === 'date' ? formatFHIRDate : formatFHIRDateTime;

    const newOnChange = useCallback(
        (value: Moment | null, dateString: string) => {
            if (value) {
                value.toJSON = () => {
                    return formatFunction(value);
                };
            }
            onChange && onChange(value, dateString);
        },
        [onChange],
    );
    return (
        <DatePicker showTime={showTime} onChange={newOnChange} format={format} value={newValue} />
    );
}
import { Checkbox, Form, Radio, Space } from 'antd';
import _ from 'lodash';
import { QuestionItemProps } from 'sdc-qrf';

import { QuestionnaireItem, QuestionnaireItemAnswerOption } from 'shared/src/contrib/aidbox';

import { getDisplay } from 'src/utils/questionnaire';

import { useFieldController } from '../hooks';

type InlineChoiceQuestionItem = QuestionnaireItem & {
    inlineChoiceDirection?: 'horizontal' | 'vertical';
};

interface InlineChoiceProps extends QuestionItemProps {
    questionItem: InlineChoiceQuestionItem;
}

export function InlineChoice({ parentPath, questionItem }: InlineChoiceProps) {
    const { linkId, text, answerOption, hidden, repeats, inlineChoiceDirection } = questionItem;

    const fieldName = repeats ? [...parentPath, linkId] : [...parentPath, linkId, 0];

    const { value, onChange, disabled } = useFieldController(fieldName, questionItem);

    if (repeats) {
        const arrayValue = (value || []) as QuestionnaireItemAnswerOption[];

        return (
            <Form.Item label={text} hidden={hidden}>
                <Space direction={inlineChoiceDirection ?? 'vertical'}>
                    {answerOption?.map((answerOption) => (
                        <Checkbox
                            checked={
                                arrayValue.findIndex((v) =>
                                    _.isEqual(v?.value, answerOption.value),
                                ) !== -1
                            }
                            key={JSON.stringify(answerOption)}
                            disabled={disabled}
                            onChange={() => onChange(answerOption)}
                        >
                            {getDisplay(answerOption.value!)}
                        </Checkbox>
                    ))}
                </Space>
            </Form.Item>
        );
    } else {
        return (
            <Form.Item label={text} hidden={hidden}>
                <Space direction={inlineChoiceDirection ?? 'vertical'}>
                    {answerOption?.map((answerOption) => (
                        <Radio
                            key={JSON.stringify(answerOption)}
                            checked={_.isEqual(value?.value, answerOption.value)}
                            disabled={disabled}
                            onChange={() => onChange(answerOption)}
                        >
                            {getDisplay(answerOption.value!)}
                        </Radio>
                    ))}
                </Space>
            </Form.Item>
        );
    }
}

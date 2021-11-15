import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SHELL_FORM_ELEMENT } from '@/constants/shell';

import Shell from '.';

describe('Shell Component 테스트', () => {
  const shellType = 'signin';
  const requestWhenQueryDone = () =>
    new Promise((resolve) => setTimeout(() => resolve('Success')));
  const ShellElement = (
    <Shell
      type={shellType}
      requestWhenQueryDone={requestWhenQueryDone}
      width={789}
      height={208}
    />
  );

  it(`Shell Component는 처음 렌더링 시
    props에 전달되는 type에 해당하는 form element중 첫번째 요소를 렌더링합니다.
    그러나, 두번째 요소는 렌더링하지 않습니다.
  `, () => {
    const { container } = render(ShellElement);

    const formElement = SHELL_FORM_ELEMENT[shellType];
    const { type: firstLineType, message: firstLineContent } = formElement[0];
    const { type: secondLineType, message: secondLineContent } = formElement[1];

    expect(container).toHaveTextContent(
      `${firstLineType} ${firstLineContent}:`,
    );
    expect(container).not.toHaveTextContent(
      `${secondLineType} ${secondLineContent}:`,
    );
  });
  it(`Shell Component에 Enter를 입력하면, 다음 요소를 렌더링합니다.`, () => {
    const { container } = render(ShellElement);

    const formElement = SHELL_FORM_ELEMENT[shellType];
    const { type: secondLineType, message: secondLineContent } = formElement[1];
    expect(container).not.toHaveTextContent(
      `${secondLineType} ${secondLineContent}:`,
    );

    const inputs = screen.getAllByRole('textbox');
    const lastInputElement = inputs[inputs.length - 1];

    userEvent.type(lastInputElement, 'sampleId{enter}');

    expect(container).toHaveTextContent(
      `${secondLineType} ${secondLineContent}:`,
    );
  });
});

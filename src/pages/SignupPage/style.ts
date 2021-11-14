import { SerializedStyles, Theme, css } from '@emotion/react';

export const layoutStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 83, 191, 0.1) 50%,
    #f4f7ff 50%
  );
`;

export const headerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  margin-bottom: 31px;
`;

export const footerStyle = (theme: Theme): SerializedStyles => css`
  margin-top: 26px;
  color: ${theme.colorGray3};
  font-family: ${theme.fontCodingBold};
  font-size: 22px;
  line-height: 38px;

  a {
    text-decoration-line: underline;
    color: ${theme.colorPrimary};
  }
`;

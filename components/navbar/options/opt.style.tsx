import styled from "styled-components";
import { IProps } from "../nav.style";

export const Folder = styled.div<IProps>`
  width: 100%;
  margin: 3px 0;
  padding: 2px 0;
  display: block;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  fill: ${({ theme }) => theme.ui.secondary};
  ${({ border }) => border};
  backdrop-filter: blur(20px) !important;

  &:hover {
    background-color: ${({ theme }) => theme.ui?.hover} !important;
    -webkit-box-shadow: 0px 3px 10px 1px ${({ theme }) => theme.ui?.hover} !important;
    -moz-box-shadow: 0px 3px 10px 1px ${({ theme }) => theme.ui?.hover} !important;
    box-shadow: 0px 3px 10px 1px ${({ theme }) => theme.ui?.hover} !important;
  }

  &.trayIcon {
    border-radius: 50% !important;
    justify-content: center;
    width: 20px !important;
    height: 20px !important;

    svg {
      overflow: visible;
      height: 10px !important;
      width: 10px !important;
    }
  }

  &.mono {
    width: 60% !important;
    grid-area: 3/ 1 / span 1 / span 2;
    text-align: center;
    color: ${({ theme }) => theme.ui.main};
    border: 1px solid ${({ theme }) => theme.ui.main};
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }

  &.resetPos {
    pointer-events: all;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    /* border: 1px solid #${({ theme }) => theme.ui.secondary}; */
    border-radius: 50%;
    justify-content: center;
    display: flex;
    height: 50px;
    width: 50px;
    flex-direction: column;
    /* padding: 2px; */

    & svg {
      stroke: #${({ theme }) => theme.ui.secondary};
      width: 28px !important;
      stroke-width: 3px;
    }
  }

  &.circleButton {
    z-index: 6000;
    border-radius: 50% !important;
    width: 70px !important;
    height: 70px !important;
    display: flex !important;
    justify-content: center !important;
  }

  &.color {
    border-color: #ebebeb !important;
    fill: ${({ theme }) => theme.ui.hover};
    background-color: ${({ theme }) => theme.ui.hover};
    -webkit-filter: drop-shadow(1px 1px 6px ${({ theme }) => theme.ui.hover});
    filter: drop-shadow(1px 1px 6px ${({ theme }) => theme.ui.hover});
    text-align: center;

    & svg {
      animation: flashConfirm 1s steps(5, start) infinite;
      animation-delay: 3s;
      -webkit-filter: none;
      filter: none;
      fill: #ebebeb;
    }
    transition: 0s;
    outline: 0px;
  }
  &.reset {
    border-color: #ebebeb !important;
    color: #ebebeb;
    background-color: ${({ theme }) => theme.ui.active};
    -webkit-filter: drop-shadow(1px 1px 6px ${({ theme }) => theme.ui.active});
    filter: drop-shadow(1px 1px 6px ${({ theme }) => theme.ui.active});
    text-align: center;
    transition: 0.3s;
  }

  .light,
  .dark {
    stroke-width: 1px !important;
  }
  .nextIcon,
  .muteIcon,
  .ShowHideIcon,
  .ColorIcon {
    fill: ${({ theme }) => theme.ui.secondary} !important;
    overflow: visible;
  }

  .ConfirmIcon,
  .ResetIcon {
    height: 80%;
  }
  .ResetIcon {
    fill: #ebebeb;
  }

  .PlayPauseIcon {
    fill: ${({ theme }) => theme.ui.secondary} !important;
    overflow: visible;
  }

  &.songinfo {
  }
`;

export const TrayWrapper = styled.div`
  padding: 0 5px;
  height: 28px;
  margin: auto 0;
  width: 50% !important;
  margin: 5px 0 7px 0;
  position: relative;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  border: 1px solid;
  border-radius: 50px !important;

  * {
    display: flex;
  }
`;

export const SongBox = styled.div`
  cursor: text;
  user-select: text !important;
  -ms-user-select: text !important;
  -moz-user-select: text !important;
  -webkit-user-select: text !important;
  border-radius: 10px !important;
  background: inherit !important;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 0 0px 15px !important;
  width: 80% !important;
  height: 35px !important;
  backdrop-filter: var(--blur);

  & textarea {
    display: block;
    overflow-y: scroll;
    padding: 0 !important;
    border: none !important;
    background-color: transparent !important;
    width: 95% !important;
    height: inherit;
    /* height: fit-content !important; */
    resize: none;
    color: ${({ theme }) => theme.ui.secondary} !important;
    ::-webkit-scrollbar {
      display: none !important;
    }
    &:active {
      border: 1px solid ${({ theme }) => theme.ui.secondary} !important;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.ui.tertiary} !important;
    box-shadow: inherit !important;
    color: inherit !important;
  }
`;
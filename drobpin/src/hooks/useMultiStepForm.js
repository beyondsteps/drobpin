import { useState } from 'react';

/**
 * 단계별 폼을 관리하는 커스텀 훅입니다.
 * @param {Array} steps - 각 폼 단계의 컴포넌트 배열
 */
function useMultiStepForm(steps) {
  // 현재 단계 인덱스를 저장하는 상태 (0부터 시작)
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // 다음 단계로 이동하는 함수
  function next() {
    setCurrentStepIndex(i => (i >= steps.length - 1 ? i : i + 1));
  }

  // 이전 단계로 이동하는 함수
  function back() {
    setCurrentStepIndex(i => (i <= 0 ? i : i - 1));
  }

  return {
    currentStepIndex,  // 현재 단계 인덱스
    step: steps[currentStepIndex],  // 현재 단계의 컴포넌트
    steps,
    next,
    back,
  };
}

export default useMultiStepForm;

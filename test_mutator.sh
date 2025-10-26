#!/bin/bash

# TypeCoercionStomperMutator 테스트 스크립트

echo "=== TypeCoercionStomperMutator 테스트 시작 ==="
echo "테스트 파일: myCorpus/test_program.js"
echo "출력 디렉토리: outResult/"
echo ""

# V8 경로 확인
V8_PATH="$HOME/v8/out/fuzzbuild/d8"
if [ ! -f "$V8_PATH" ]; then
    echo "❌ V8 바이너리를 찾을 수 없습니다: $V8_PATH"
    echo "올바른 V8 경로를 확인해주세요."
    exit 1
fi

echo "✅ V8 바이너리 발견: $V8_PATH"
echo ""

# 테스트 실행
echo "🚀 Fuzzilli 실행 중..."
echo "명령어: swift run FuzzilliCli --profile=v8 --maxIterations=1 --logLevel=verbose --importCorpus=./myCorpus --storagePath=./outResult $V8_PATH"
echo ""

swift run FuzzilliCli --profile=v8 --maxIterations=1 --logLevel=verbose --importCorpus=./myCorpus --storagePath=./outResult "$V8_PATH"

echo ""
echo "=== 테스트 완료 ==="
echo "결과를 확인하려면: ls -la outResult/"

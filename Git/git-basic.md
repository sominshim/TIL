## Git & GitHub

### 개념 정의

- **Git**: 소스 코드와 파일의 변경 이력을 기록하고 관리하는 분산 버전 관리 시스템(DVCS)
- **Local**: 내 컴퓨터에 있는 로컬 저장소
- **Remote**: GitHub 등에 있는 원격 저장소

### 왜 쓰는가?

- 코드의 변경 사항을 기록하여 이전 작업 내역을 관리하고 추적할 수 있다.
- Local(내 컴퓨터)에서 작업한 파일을 Remote(GitHub)에 업로드하여 다른 사람들과 코드를 공유하고 협업할 수 있다.

### 핵심 명령어

- `git clone`: GitHub에 있는 Repository를 Local(내 컴퓨터)에 복사할 때 사용
- `git init`: Local에 있는 폴더를 Git Repository로 초기화할 때 사용
- `git add`: Working Directory의 변경된 파일 중 Commit할 파일을 Staging Area에 추가할 때 사용
- `git commit`: Staging Area에 있는 변경 사항을 하나의 Checkpoint(Snapshot)로 저장할 때 사용
- `git revert`: 특정 Commit의 변경 사항을 되돌리는 새로운 Commit을 생성할 때 사용
- `git push`: Local의 Commit 기록을 Remote(GitHub Repository)에 업로드할 때 사용
- `git pull`: Remote의 최신 변경 사항을 가져와 Local에 반영할 때 사용

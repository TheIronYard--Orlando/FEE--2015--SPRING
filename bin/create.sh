#!/usr/bin/env zsh

if [[ $# -lt 1 ]]; then
  echo 'error: missing argument' >&2
  cat <<'USAGE'
usage: create.sh XX--Assignment-Name [ ISO-DATE ]

  create an empty `README.md` file in `Assignment/XX--Assignment-Name/` and in
  `Notes/ISO-DATE/` using today's date if none is specified.
USAGE

  exit 1
fi

for d in Assignments/$1 Notes/${2:-$(gdate -d today -I)}; do
  ginstall -vCD /dev/null $d/README.md
done && git status -s

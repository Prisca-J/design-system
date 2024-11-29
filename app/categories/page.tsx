git filter-branch --commit-filter '
if [ "$GIT_AUTHOR_EMAIL" = "jufre691@MDNMAC-006.local" ]; then
    GIT_AUTHOR_EMAIL="prisca.jufre@icloud.com";
    GIT_COMMITTER_EMAIL="prisca.jufre@icloud.com";
    git commit-tree "$@";
else
    git commit-tree "$@";
fi' HEAD
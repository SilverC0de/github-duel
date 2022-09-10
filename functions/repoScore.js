export default (repoNodes) => {

  const repoScoreData = {};

  repoNodes.forEach((repo) => {
    const {
      name,
      stargazerCount,
      forkCount,
      pullRequestTemplates,
      pullRequests,
      licenseInfo,
      description,
      codeOfConduct,
      issueTemplates,
    } =  repo;

    let score = stargazerCount * 0.3 + forkCount * 0.5;

    if (codeOfConduct !== null) score++;
    if (licenseInfo !== null) score++;
    if (pullRequestTemplates.length !== 0) score++;
    if(pullRequests.totalCount!==0){
      score+=pullRequests.totalCount*0.2;
    };
    if (issueTemplates.length !== 0) score++;
    if (description !== null) score++;

    repoScoreData[name] = score;
  });

  return repoScoreData;

};



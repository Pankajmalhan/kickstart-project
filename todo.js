1. Check why we don't need to send gas amount for
await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });

2. Check how this project will work for non meta mask account
3. Add next dyanmic routing instead of server routing
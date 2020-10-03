import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateService from '@modules/clients/services/AuthenticateService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateService);

    const { client, token } = await authenticateUser.execute({
      email,
      password
    });

    delete client.password;

    return response.json({ client, token });
  }
}

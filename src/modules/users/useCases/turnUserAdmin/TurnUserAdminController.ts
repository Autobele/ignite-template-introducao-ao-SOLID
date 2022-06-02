import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;
      const idStringValue = user_id.toString();
      const turnAdminUser = this.turnUserAdminUseCase.execute({
        user_id: idStringValue,
      });
      return response.status(201).json(turnAdminUser);
    } catch (error) {
      return response.status(404).json({ error: "Not found" });
    }
  }
}

export { TurnUserAdminController };

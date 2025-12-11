import {
  FileRepository,
  ProjectRepository,
  ReadFileParams,
  ReadFileUseCase,
} from "./read-file-protocols.js";

export class ReadFile implements ReadFileUseCase {
  constructor(
    private readonly fileRepository: FileRepository,
    private readonly projectRepository: ProjectRepository
  ) {}

  async readFile(params: ReadFileParams): Promise<string | null> {
    const { projectName, fileName } = params;

    // No need to check project existence separately - loadFile will return null if file doesn't exist
    return this.fileRepository.loadFile(projectName, fileName);
  }
}

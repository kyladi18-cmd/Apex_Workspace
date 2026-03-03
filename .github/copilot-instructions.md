# Copilot Instructions

## Project Overview

This is **Apex Node 01**, a Python project managed with [uv](https://docs.astral.sh/uv/).

## Environment Setup

Install dependencies and set up the virtual environment:

```bash
uv sync
```

## How to Run

```bash
uv run python main.py
```

## How to Test

Run the test suite with:

```bash
uv run pytest
```

## Adding Dependencies

Use `uv add` to add new packages (do **not** edit `pyproject.toml` manually for dependencies):

```bash
uv add <package-name>
```

## Conventions

- Python version: 3.9 or higher (see `pyproject.toml`).
- All dependencies are managed via `uv`; the lock file should always be committed alongside `pyproject.toml`.
- Follow standard Python style (PEP 8). Keep functions and modules focused and well-named.
- Write tests for new functionality using `pytest`.

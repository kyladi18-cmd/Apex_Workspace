"""Apex Node 01 package."""


def greet(name: str) -> str:
    """Return a greeting message."""
    return f"Hello, {name}!"


def main() -> None:
    """Run the Apex Node 01 application."""
    print(greet("World"))

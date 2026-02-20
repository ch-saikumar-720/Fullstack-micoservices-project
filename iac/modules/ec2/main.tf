resource "aws_instance" "myec2" {
  ami           = var.ami
  instance_type = var.instance_type
  subnet_id     = var.subnet_id
  key_name      = var.key_pair

  tags = {
    Name = "Jump-server"
  }
}
